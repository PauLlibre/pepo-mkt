import BookACallButton from "./BookACallButton";

export default function Header() {
    return (
      <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-8 p-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-left">
          ALTUUM
        </h1>
        <BookACallButton />
      </div>
    );
  }