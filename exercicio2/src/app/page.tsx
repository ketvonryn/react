import {EmojiRating} from "@/components/emoji"


function Page() {


  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-white text-5xl font-bold">
        <EmojiRating rate={5} />
      </div>

    </div>
  );

}
export default Page;