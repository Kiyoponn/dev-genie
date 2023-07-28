import Header from '@/components/header'
import MainForm from '@/components/mainForm'
import Nav from '@/components/navbar'
import ToastClient from '@/components/toastClient'

export const revalidate = 60

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Header />
      <MainForm />
      <ToastClient />
    </div>
  )
}
