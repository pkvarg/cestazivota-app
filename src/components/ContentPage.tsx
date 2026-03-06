interface ContentPageProps {
  title: string;
  gradientClass: string;
  children: React.ReactNode;
}

export default function ContentPage({ title, gradientClass, children }: ContentPageProps) {
  return (
    <div>
      <section className={`${gradientClass} py-20 px-4`}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {title}
          </h1>
        </div>
      </section>
      <section className="bg-gray-950 py-16 px-4">
        <div className="max-w-3xl mx-auto text-white leading-relaxed">
          {children}
        </div>
      </section>
    </div>
  );
}
