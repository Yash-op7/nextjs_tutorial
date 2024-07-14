import Image from "next/image";
import Link from "next/link";
import ProductPage from "./components/ProductPage";

export default function Home() {
  return (
    <main>
    <h1> hello everynyan! </h1>
    <div> <Link href="/users">GO to users</Link>
    <ProductPage />
    <h1>Click below to go to the data fetch example!</h1>
    <Link href="/fetch-example"> Data Fetch Example </Link>
    </div>
    </main>
  );
}
