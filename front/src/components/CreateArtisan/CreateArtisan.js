import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../AxiosConfig';
import logo from '../../Photos/Logo1.png';
import './CreateArtisan.css';

const CreateArtisan = () => {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [servicesList, setServicesList] = useState([]);
  const navigate = useNavigate();
  const password = watch('password');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosInstance.get('getAllServices');
        setServicesList(response.data.services);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      if (data.image[0]) {
        formData.append('image', data.image[0]);
      }
      
      const response = await axiosInstance.post('create_artisan', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoading(false);
      setSuccess(true);
      console.log('Account created successfully:', response.data);
      setMessage('Account created successfully!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      setMessage('Error creating account. Please try again.');
      console.error('Error creating account:', error);
    }
  };

  return (
    <div className="create-artisan-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo"/>
      </div>
      <h1>CRÉER UN COMPTE</h1>
      <div className="create-account-container">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          success ? (
            <p className="message success">{message}</p>
          ) : (
            <>
              {message && <p className={`message ${success ? 'success' : 'error'}`}>{message}</p>}
              <form onSubmit={handleSubmit(onSubmit)} className="create-account-form" encType="multipart/form-data">
                <h2 className='form-title'>Compte Artisan</h2>

                <div className="form-group">
                  <label className="label">Nom</label>
                  <input className="input" type="text" {...register('name', { required: true })} />
                  {errors.name && <span className='error'>This field is required</span>}
                </div>

                <div className="form-group">
                  <label className="label">Date de naissance</label>
                  <input className="input" 
                    type="date" 
                    {...register('date_naissance', { 
                      required: true,
                      validate: value => new Date(value) < new Date() || 'Date must be before today'
                    })} 
                  />
                  {errors.date_naissance && <span className='error'>{errors.date_naissance.message}</span>}
                </div>

                <div className="form-group">
                  <label className="label">Téléphone</label>
                  <input className="input" 
                    type="tel" 
                    {...register('phone', { 
                      required: true,
                      pattern: {
                        value: /^[0-9]{10}$/, // Adjust this regex to match the desired phone format
                        message: 'Invalid phone number format'
                      }
                    })} 
                  />
                  {errors.phone && <span className='error'>{errors.phone.message}</span>}
                </div>

                <div className="form-group">
                  <label className="label">Email</label>
                  <input className="input" 
                    type="email" 
                    {...register('email', { 
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email format'
                      }
                    })} 
                  />
                  {errors.email && <span className='error'>{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <label className="label">Adresse complète</label>
                  <input className="input" type="text" {...register('address', { required: true })} />
                  {errors.address && <span className='error'>This field is required</span>}
                </div>

                <div className="form-group">
                  <label className="label">Services</label>
                  <select className='select' {...register('service', { required: true })}>
                    <option value="">Sélectionnez un service</option>
                    {servicesList.map(service => (
                      <option key={service.id} value={service.id}>{service.name}</option>
                    ))}
                  </select>
                  {errors.service && <span className='error'>This field is required</span>}
                </div>

                <div className="form-group">
                  <label className="label">Années d'expérience</label>
                  <input className="input" 
                    type="number" 
                    {...register('Annes_experiances', { 
                      required: true,
                      min: {
                        value: 0,
                        message: 'Years of experience must be a positive number'
                      }
                    })}
                  />
                  {errors.Annes_experiances && <span className='error'>{errors.Annes_experiances.message}</span>}
                </div>

                <div className="form-group">
                  <label className="label">Description</label>
                  <textarea  className='textarea'
                    {...register('description', { 
                      required: true,
                      maxLength: {
                        value: 500,
                        message: 'Description must be less than 500 characters'
                      }
                    })}
                  />
                  {errors.description && <span className='error'>{errors.description.message}</span>}
                </div>

                <div className="form-group">
                  <label className="label">Upload Image (jpg or png)</label>
                  <input className="input" 
                    type="file" 
                    {...register('image', { 
                      required: true,
                      validate: {
                        acceptedFormats: files => 
                          ['image/jpeg', 'image/png'].includes(files[0]?.type) || 'Only jpg and png files are accepted'
                      }
                    })}
                  />
                  {errors.image && <span className='error'>{errors.image.message}</span>}
                </div>

                <div className="form-group">
                  <label className="label">Mot de passe</label>
                  <input className="input" 
                    type="password" 
                    {...register('password', { 
                      required: true,
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters'
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Password must contain a letter, a number, one of (and only) these symbols [@$!%*?&] , an uppercase and a lowercase letter'
                      }
                    })} 
                  />
                  {errors.password && <span className='error'>{errors.password.message}</span>}
                </div>

                <div className="form-group">
                  <label className='label'>Confirmer le mot de passe</label>
                  <input className="input" 
                    type="password" 
                    {...register('confirmPassword', { 
                      required: true,
                      validate: value => value === password || 'Passwords do not match'
                    })} 
                    onPaste={(e) => e.preventDefault()}
                  />
                  {errors.confirmPassword && <span className='error'>{errors.confirmPassword.message}</span>}
                </div>

                <button type="submit">Créer votre compte</button>
              </form>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default CreateArtisan;
