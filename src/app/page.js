import HomePage from "@/components/HomePage";
import { ProvideAuth } from "@/context/ProvideAuth";

import React from "react";

function page() {
  return (
    <ProvideAuth>
      <HomePage />
          
    </ProvideAuth>
  );
}

export default page;
