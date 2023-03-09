import { Form } from 'react-router-dom'
import {FaUserPlus} from 'react-icons/fa'
import ilustration from '../assets/illustration.jpg'

const Intro = () => {
  return (
    <div className='intro'>
      <div>
        <h1>
          Take Control of <span className='accent'>Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Star your
          journey today.
        </p>
        <Form method='post'>
          <input
            type='text'
            name='userName'
            required
            placeholder='What is your name?'
            aria-label='Ypur name'
            autoComplete='given-name'
          />
          <input type="hidden" name="_action" value='newUser' />
          <button className='btn btn--dark' type="submit">
            <span>Create Account</span>
            <FaUserPlus size={20} />
          </button>
        </Form>
      </div>
      <img src={ilustration} alt="Person with money" width={500} />
    </div>
  );
};
export default Intro
