import React, { useContext } from 'react';
import styles from './style.module.scss'

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import logo from '../../img/site/logo.png';
import spinner from '../../img/site/spinner.png';
import google from '../../img/site/google-alt.png';
import facebook from '../../img/site/facebook.png';
import twitter from '../../img/site/twitter.png';
import arrow_left from '../../img/site/arrow_left.png';

const CreatUserFormSchema = z.object ({
  email: z.string()
  .nonempty('O e-mail é obrigatório')
  .email('Formato de e-mail inválido'),
  password: z.string()
  .min(6,'A senha precisa no mínimo 6 caracteres'),
})

type  CreatUserFormData = z.infer<typeof CreatUserFormSchema>

function Login() {

  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm<CreatUserFormData>({
    resolver: zodResolver(CreatUserFormSchema)
  })

  function CreateUser (data:any) {
    console.log(data);
  }

  const navigate = useNavigate();

  const BackPage = () => navigate('/');
  const SignUp = () => navigate('/singup');

  return (
    <div className={styles.bodyLogin}>

      <div className={styles.bodyLoginBG}>
        <p className={styles.bodyLoginDados_p_1}><img src={logo} alt="logo" id='logo' />Finder Pet</p>
        <p className={styles.bodyLoginDados_p_2}>18,313,224 <span>pets</span> for you</p>
        <p className={styles.bodyLoginDados_p_3}>A variety of images of pets from around the world for you to find and love.</p>
        <p className={styles.bodyLoginDados_p_4}><img src={spinner} alt="spinner" id='spinner' />Photography by John Wick</p>
      </div>

      <div className={styles.bodyLoginDados}>
        <img src={arrow_left} alt="arrow_left" id='arrow_left' onClick={BackPage} />
        <form onSubmit={handleSubmit(CreateUser)}>
          <p className={styles.bodyLoginDados_p_1_dados}><img src={logo} alt="logo" id='logo' />Finder Pet</p>
          <p className={styles.bodyLoginDados_p_Signin}>Sign in</p>

          <label>Username or Email</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email && <span style={{color: 'red', marginTop: -12}}>{errors.email.message}</span>}

          <label>Password</label>
          <input type="password" id="password" {...register('password')} />
          {errors.password && <span style={{color: 'red', marginTop: -12}}>{errors.password.message}</span>}

          <button id="entrar" type="submit" className={styles.bodyLoginDados_Signin}>Sign In</button>

          <p className={styles.bodyLoginDados_p_Forgot}>Forgot your password?</p>
          <div className={styles.bodyLoginDados_linha}><hr /><p>OR</p> <hr /></div>
          <button className={styles.bodyLoginDados_Continue}><img src={google} alt="google" id='google' />Continue with Google</button>
          <button className={styles.bodyLoginDados_Continue}><img src={facebook} alt="facebook" id='facebook' />Continue with Facebook</button>
          <button className={styles.bodyLoginDados_Continue}><img src={twitter} alt="twitter" id='twitter' />Continue with Twitter</button>
          <p className={styles.bodyLoginDados_p_NotMenber}>Not a member? <span onClick={SignUp}>Sign up now</span></p>
        </form>
      </div>

    </div>
  );
}

export default Login;
