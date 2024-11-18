import React from "react";
import { Button, Flex, Grid , Image , Text } from "@chakra-ui/react";
import  uniPlannerLogo  from "@/assets/images/uniPlannerLogo.svg"

export const LandingPage = () => {






  return (


    <div className=" 2xl:w-[100vw] 2xl:h-[100vh] bg-white">


      {/* the top bar */}
      <Flex borderBottomWidth="1px" borderBottomColor="gray.300" height="4rem">

        {/* UNI PLANNER LOGO */}
        <Image src={uniPlannerLogo}/>


        {/* UNI PLANNER TITLE */}
        <Text textStyle="xl" color="black">UniPlanner</Text>

        {/* TODAY BUTTON */}
        <Button color="black">Today</Button>


        {/* LEFT BUTTON */}


        {/* RIGHT BUTTON */}


        {/* MONTH NAME */}


        {/* LOGIN BUTTON OR AVATAR */}
      </Flex>

      {/* EVERYTHING BELOW THE TOP BAR */}
      <Flex>
        {/* THE LEFT SIDE */}
        <Flex></Flex>

        {/* THE RIGHT SIDE */}
        <Grid></Grid>
      </Flex>
    </div>
  );
};
