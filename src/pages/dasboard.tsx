
import ContactList from '@/components/ContactList';

export default function Dashboard() {
  return (
    <>
      <h1 className='text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Contact List</h1>
      <ContactList />
    </>
  );
}
