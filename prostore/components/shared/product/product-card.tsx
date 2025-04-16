import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bold } from "lucide-react";
import ProductPrice from "./product-price";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-10 items-center">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            priority={true}
          />
        </Link>
        <CardTitle className="text-center">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/products/${product.slug}`} >
            <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
            <p>{product.rating} Stars</p>
            {product.stock > 0 ? (
                <ProductPrice value={Number(product.price)} />
            ):(
                <p className="font-bold">Out Of Stock</p>
            )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
