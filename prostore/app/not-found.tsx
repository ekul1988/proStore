'use client'
import { Button } from "@/components/ui/button"
import {APP_NAME} from '@/lib/constants'
import Image from "next/image"
import { useRouter } from "next/navigation"
const NotFoundPage = () => {
    const router = useRouter()
    return ( 
            <div className="flex flex-col items-center justify-center min-h-screen">
<Image src='/images/logo.svg' alt={`${APP_NAME} logo`} width={48} height={48} priority={true} />
<h1 className="text-4xl font-bold">404 - Page Not Found</h1>
<p className="text-gray-500">The page you are looking for does not exist.</p>
<Button onClick={() => router.push('/')}>Back to Home</Button>

        </div>
     );
}
 
export default NotFoundPage;