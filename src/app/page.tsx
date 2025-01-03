import MainHome from "@/components/MainHome";
import SeccionSalas from "@/components/SeccionSalas";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col w-full items-center justify-center sm:items-center ">
      <MainHome/>
      <SeccionSalas/>      
      </main>
    </div>
  );
}
