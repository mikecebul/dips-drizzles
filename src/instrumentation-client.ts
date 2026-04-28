// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Disable log ingestion to avoid sending app logs as Sentry Logs.
  enableLogs: false,

  debug: false,

  // Use tunnel to bypass ad blockers and routing issues
  // tunnel: '/api/sentry-tunnel',
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
