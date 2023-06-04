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

const CreatUserFormSchema = z.object({
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  name: z.string()
    .nonempty('Nome obrigatório'),
    username: z.string()
    .nonempty('Username obrigatório'),
  password: z.string()
    .min(6, 'A senha precisa no mínimo 6 caracteres'),
})

type CreatUserFormData = z.infer<typeof CreatUserFormSchema>

function SingUp() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreatUserFormData>({
    resolver: zodResolver(CreatUserFormSchema)
  })

  function CreateUser(data: any) {
    console.log(data);
  }

  const navigate = useNavigate();

  const BackPage = () => navigate('/');
  const SignIn = () => navigate('/login');

  return (
    <div className={styles.bodySingUp}>

      <div className={styles.bodySingUpBG}>
        <p className={styles.bodySingUpDados_p_1}><img src={logo} alt="logo" id='logo' />Finder Pet</p>
        <p className={styles.bodySingUpDados_p_2}>18,313,224 <span>pets</span> for you</p>
        <p className={styles.bodySingUpDados_p_3}>A variety of images of pets from around the world for you to find and love.</p>
        <p className={styles.bodySingUpDados_p_4}><img src={spinner} alt="spinner" id='spinner' />Photography by John Wick</p>
      </div>

      <div className={styles.bodySingUpDados}>
        <img src={arrow_left} alt="arrow_left" id='arrow_left' onClick={BackPage} />
        <form onSubmit={handleSubmit(CreateUser)}>
          <p className={styles.bodySingUpDados_p_Signin}>Create an account</p>

          <label>Email Address</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email && <span style={{ color: 'red', marginTop: -12 }}>{errors.email.message}</span>}

          <label>Name</label>
          <input type="text" id="name" {...register('name')} />
          {errors.name && <span style={{ color: 'red', marginTop: -12 }}>{errors.name.message}</span>}

          <label>Username</label>
          <input type="text" id="username" {...register('username')} />
          {errors.username && <span style={{ color: 'red', marginTop: -12 }}>{errors.username.message}</span>}

          <label>Password</label>
          <input type="password" id="password" {...register('password')} />
          {errors.password && <span style={{ color: 'red', marginTop: -12 }}>{errors.password.message}</span>}

          <p className={styles.bodySingUpDados_terms_privacy}>By clicking the “Sign up” button, you agree to
            Finder Pet <span>Terms of Service</span> and confirm that you
            have read our <span>Privacy Policy.</span></p>

          <button id="entrar" type="submit" className={styles.bodySingUpDados_Signin}>Sign In</button>

          <div className={styles.bodySingUpDados_linha}><hr /><p>OR</p> <hr /></div>
          <button className={styles.bodySingUpDados_Continue}><img src={google} alt="google" id='google' />Continue with Google</button>
          <button className={styles.bodySingUpDados_Continue}><img src={facebook} alt="facebook" id='facebook' />Continue with Facebook</button>
          <button className={styles.bodySingUpDados_Continue}><img src={twitter} alt="twitter" id='twitter' />Continue with Twitter</button>
          <p className={styles.bodySingUpDados_p_NotMenber}>Already a member? <span onClick={SignIn}>Sign In</span></p>
        </form>
      </div>

    </div>
  );
}

export default SingUp;
