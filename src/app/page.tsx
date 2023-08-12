import Image from 'next/image'
import RootLayout from "@/app/layout";
import Landing from "@/app/components/page";


export default function Home() {
  return (
          <RootLayout>
              <Landing />
          </RootLayout>
  )
}
