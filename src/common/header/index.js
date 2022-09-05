import React from "react";
import {
  HeadWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from "./style.js";
import scope from '../../statics/iconImg/scope.svg'
// import '../../statics/iconfont/iconfont.js'

class Header extends React.Component {
  render() {
    return (
      <HeadWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          {/* <img className="" src={scope}/> */}
          {/* <i className="iconfont">&#xe636;</i> */}
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className="iconfont">&#xe62b;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont">&#xe600;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeadWrapper>
    );
  }
}

export default Header;
