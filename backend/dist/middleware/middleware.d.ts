import type { NextFunction, Request, Response } from "express";
declare const authMiddlware: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export { authMiddlware };
//# sourceMappingURL=middleware.d.ts.map