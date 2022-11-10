import {Request, Response} from 'express';
import {get, post} from './decorators/routes';
import {controller} from './decorators/controller';
import {bodyValidator} from './decorators/bodyValidation';

@controller('/auth')
class LoginController
{
  @get('/login')
  getLogin(req: Request, res: Response): void 
  {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  };

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response)
  {
    const {email, password} =  req.body;

    if(email && password && email === 'login@gmail.com' && password === 'password')
    {
      req.session = {loggedIn: true};
      res.redirect('/');
    }
    else
    {
      res.send('invalid email or password')
    }
  }

  @get('/logout')
  getLogOut(req: Request, res: Response)
  {
    req.session = undefined;
    res.redirect('/');
  }
}