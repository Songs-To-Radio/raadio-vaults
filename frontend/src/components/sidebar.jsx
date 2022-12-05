import React from "react";
import Text from "./texts";

export default function Sidebar({setSection}){
    return (
        <div className="border-r-[7px] border-theme-red h-[100%] w-[20%] min-w-[150px] flex justify-center">
            <div className="h-[120px] flex flex-col justify-between mt-10 w-fit">
                <Text cls={`text-theme-red`} onClick={()=> setSection(0)}>
                    DashBoard
                </Text>
                <Text cls={`text-theme-red`} onClick={()=> setSection(2)}>
                    Create RadioVault
                </Text>
                <Text cls={`text-theme-red`} onClick={()=> setSection(3)}>
                    WhiteList
                </Text>
                <Text cls={`text-theme-red`} onClick={()=> setSection(4)}>
                    Deploy vaults NFTs (Coming soon) 
                </Text>
            </div>
        </div>
    )
}
