import { useRouter } from 'next/navigation';

export default function useAuth() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear()
    router.push('/login');
  }

  return { handleLogout }
}
