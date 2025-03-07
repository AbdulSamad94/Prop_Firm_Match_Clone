'use client';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        fullname: formData.get('fullname'),
        email: formData.get('email'),
        password: formData.get('password')
      })
    });

    if (response.ok) {
      // Redirect to protected page after successful registration
      router.push('/dashboard');
    } else {
      const error = await response.json();
      alert(error.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullname" placeholder="Full Name" required />
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Register</button>
    </form>
  );
}