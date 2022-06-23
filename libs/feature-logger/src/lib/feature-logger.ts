import { Application } from "express";

import * as morgan from "morgan"

export function useLogger(app: Application) {
  return app.use(morgan('combined'))
}
