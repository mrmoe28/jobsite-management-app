# Vercel Deployment Guide for Contractor Manager

This document provides an overview of the Vercel deployment configuration for your Contractor Manager application.

## Deployment Configuration

Your application is configured with optimal settings for Vercel deployment:

### Git Integration
- **Enabled Branches**: main, production, staging
- **Disabled Branches**: dev-*, test-*
- **Auto-Aliasing**: Enabled for merged PRs
- **Auto Job Cancellation**: Enabled to prioritize recent commits

### Environment Settings
- **Production Mode**: Enabled
- **Function Resources**: 1GB memory allocation
- **Function Timeout**: 10 seconds
- **Region**: US East (iad1)

### URL Configuration
- **Clean URLs**: Enabled
- **Trailing Slash**: Disabled
- **Public Access**: Enabled

### GitHub Integration
- **Deployment Status**: Enabled
- **Repository Dispatch**: Enabled for CI/CD workflows
- **Silence Comments**: Disabled (comments shown on PRs)

## GitHub Workflows

Two GitHub Action workflows are set up to automate deployment:

### Preview Deployment
- Triggered on pushes to non-main branches
- Creates preview deployments for testing changes

### Production Deployment
- Triggered on pushes to main/production branches
- Automatically deploys to production environment
- Responds to Vercel deployment success events

## Environment Variables

The following environment variables are available in your deployments:

```
VERCEL_GIT_PROVIDER=github
VERCEL_GIT_REPO_SLUG=jobsite-management-app
VERCEL_GIT_COMMIT_REF=<branch-name>
VERCEL_GIT_COMMIT_SHA=<commit-hash>
```

## Vercel CLI Commands

For local development and manual deployments:

```bash
# Install Vercel CLI
npm install -g vercel

# Link to your Vercel project
vercel link

# Pull environment variables
vercel env pull

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Troubleshooting

If you encounter build errors:

1. Check the build logs in the Vercel dashboard
2. Ensure database is properly initialized with the correct schema
3. Verify environment variables are correctly set
4. For memory issues, optimize dependencies and build process

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Integration Guide](https://vercel.com/docs/deployments/git/vercel-for-github)
- [Environment Variable Guide](https://vercel.com/docs/projects/environment-variables)