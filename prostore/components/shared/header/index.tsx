
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
const Header = () => {
    return ( 
        <header className='w-full border-b'>
            {/* wrapper this wrapps all of the content of the header */}
           <div className="wrapper flex-between">
            {/* flex-start this is the left side of the header */}
            <div className="flex-start">
                <Link href="/" className="flex-start">
                    <Image src="/images/logo.svg" alt={`${APP_NAME} logo`} width={48} height={48} priority={true} />
                    <span className="hidden font-bold text-2xl ml-3 lg:block">{APP_NAME}</span>
                </Link>
            </div>
          
                <Menu />    
            
     </div>
        </header>
    );
} 
 
export default Header;