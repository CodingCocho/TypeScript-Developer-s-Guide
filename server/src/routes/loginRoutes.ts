import {NextFunction, Request, Response, Router} from 'express';

// Plan 
// router.route('/').get(protect, getTickets).post(protect, createTicket);
// Create a class using decorators that will handle this line of code and inside that class it will contain
// the method definitions with appropraite middleware. 

interface RequestWithBody extends Request
{
  body: 
  {
    [key: string]: string | undefined
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
}

const router = Router();






export {router};