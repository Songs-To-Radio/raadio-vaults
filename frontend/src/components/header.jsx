import React from "react";
import Button from "./button";
import Text from "./texts";

export default function Header({connect, disconnect, account, setSection}){
    return (
        <header className="flex px-[10%] py-[15px] items-center relative"
            style={{
                boxShadow: "0px 0px 5px grey"
            }}
        >

            <h1 className="text-[24px]">
                <span className="font-black text-[red]">RADIO</span>
                <span className="font-bold">VAULTS</span>
            </h1>

            <Text cls="ml-[50px]" size={"sm"} onClick={()=>{
                setSection(5);
            }}>
                Services
            </Text>

            <Button label={account? account.slice(0, 7)+"....."+account.slice(-7) : "Connect Wallet"} cls="ml-auto" onClick={account? disconnect : connect}/>
        </header>
    )
}