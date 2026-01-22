import { Showcase2, Showcase } from "@/lib/utils";

import dynamic from "next/dynamic";

const ShowcaseRow = dynamic(() => import("./ShowcaseRow"), {
  ssr: true,
  loading: null,
});

function ShowcaseMarque() {


}

export default ShowcaseMarque;
