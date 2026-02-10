import Image from 'next/image'

export function ConsultationImageSection() {
  return (
    <section className="bg-white">
      <div className="relative w-full aspect-[3/2] sm:aspect-[16/9]">
        <Image
          src="/images/home-consultation.png"
          alt="Patients and provider at Tasel Health clinic during consultation"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  )
}


