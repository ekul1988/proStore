import z from 'zod'
import { fortmatNumberWithDecimal } from './utils'


//This formats the price 
const currency =z
.string()
.refine((value) => /^\d+(\.\d{2})?$/.test(fortmatNumberWithDecimal(Number(value))),'Price must have exactly two decimal places.')


// Schema for inserting products
export const insertProductSchema = z.object({
    name:z.string().min(3, 'Name must be at least 3 characters'),
    slug:z.string().min(3, 'Name must be at least 3 characters'),
    category:z.string().min(3, 'Name must be at least 3 characters'),
    brand:z.string().min(3, 'Name must be at least 3 characters'),
    stock:z.coerce.number(), // coerce is used to convert a string from a form to a number
    images: z.array(z.string()).min(1, "Product must have at least one image"),
    isFeatured: z.boolean(), 
    banner: z.string().nullable(),  
    price: currency,})