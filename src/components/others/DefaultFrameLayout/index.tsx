export default function DefaultFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-4">
      {children}
    </div>
  );
}
