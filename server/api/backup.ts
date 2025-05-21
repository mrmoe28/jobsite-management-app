import { db } from '../db';
import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';

/**
 * Database backup endpoint for scheduled Vercel cron job
 * This exports database tables to JSON format and can be expanded
 * to upload to a secure storage location.
 */
export default async function handler(req: Request, res: Response) {
  try {
    // Check for authorization on the backup endpoint
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    const token = authHeader.split(' ')[1];
    
    // Verify token matches environment variable
    if (token !== process.env.BACKUP_API_KEY) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    
    // Create backup directory if it doesn't exist
    const backupDir = path.join(process.cwd(), 'backups');
    
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // Generate timestamp for backup filename
    const timestamp = format(new Date(), 'yyyy-MM-dd-HH-mm-ss');
    const backupFileName = `backup-${timestamp}.json`;
    const backupPath = path.join(backupDir, backupFileName);
    
    // Get all data from important tables
    const users = await db.query.users.findMany();
    const projects = await db.query.projects.findMany();
    const projectMembers = await db.query.projectMembers.findMany();
    const reports = await db.query.reports.findMany();
    const photos = await db.query.photos.findMany();
    const documents = await db.query.documents.findMany();
    const deadlines = await db.query.deadlines.findMany();
    const activities = await db.query.activities.findMany();
    const assignments = await db.query.assignments.findMany();
    
    // Create backup object
    const backupData = {
      metadata: {
        timestamp: new Date().toISOString(),
        version: '1.0',
      },
      data: {
        users,
        projects,
        projectMembers,
        reports,
        photos,
        documents,
        deadlines,
        activities,
        assignments
      }
    };
    
    // Write backup to file
    fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2));
    
    // For a production system, this is where you would upload
    // the backup file to S3, Google Cloud Storage, etc.
    // Example:
    // await uploadToCloud(backupPath);
    
    console.log(`Backup created successfully: ${backupFileName}`);
    
    return res.status(200).json({
      success: true,
      message: 'Database backup completed successfully',
      timestamp: new Date().toISOString(),
      fileName: backupFileName
    });
  } catch (error) {
    console.error('Backup failed:', error);
    return res.status(500).json({
      success: false,
      message: 'Database backup failed',
      error: error.message
    });
  }
}