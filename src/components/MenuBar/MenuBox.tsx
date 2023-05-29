import {Box, Button} from "@mui/material";
import {Link, Link as RouterLink} from "react-router-dom";
import React from "react";





const MenuBox: React.FC = () => {
    return (
<Box>
    <div className="dropdown" style={{position: "relative", display: "inline-block"}}>
        <Button color="inherit" style={{fontSize: '17px', lineHeight: '21px'}} component={RouterLink} to="/products">
            부동산융합아카데미
        </Button>
        <div className="dropdownContent" style={{display:"none",
        position: "absolute",
            minWidth: '160px',
            zIndex: 1,
            backgroundColor: '#f9f9f9',
            padding: '12px 16px',
            borderRadius: '5px',
            fontWeight: "bold",
            lineHeight: '30px',
            justifyContent: "center"
        }}>
            <Link to="/products/shirts">부동산융합아카데미란</Link>
            <Link to="/products/pants">로드맵</Link>
        </div>
    </div>

    <div className="dropdown">
        <Button color="inherit" style={{fontSize: '17px'}} component={RouterLink} to="/products">
            커뮤니티
        </Button>
        <div className="dropdownContent">
            <Link to="/products/shirts">공지사항</Link>
            <Link to="/products/pants">구인구직</Link>
            <Link to="/products/pants">자주묻는질문</Link>
            <Link to="/products/pants">1:1문의</Link>
        </div>
    </div>
    <Button color="inherit" style={{fontSize: '17px'}} component={RouterLink} to="/">
        강의검색
    </Button>
</Box>
    )
};

export default MenuBox;