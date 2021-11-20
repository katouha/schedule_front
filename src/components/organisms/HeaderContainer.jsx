import React from "react";
import './../../resources/css/header.css'
import { Button } from "../atoms/Button";
import { Label } from "../atoms/Label";
export const HeaderContainer = (props) =>{

    const logout = () => {
        //ログアウト
    }
    return(
        <div className={"headerContant"}>
            <div　className={"headerContainer"}>
                <Label 
                    className={"headerTitle"}
                    value={"スケジュールアプリ"}
                />
                <Button 
                    value={"ログアウト"}
                    className={"logoutBtn"}
                    onClick={logout}
                />
                    
            </div>
        </div>
    )
}