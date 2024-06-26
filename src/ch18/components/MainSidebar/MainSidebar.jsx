/** @jsxImportSource @emotion/react */
import MainSidebarBody from "./MainSidebarBody/MainSidebarBody";
import MainSidebarHeader from "./MainSidebarHeader/MainSidebarHeader";
import * as s from "./style";

function MainSidebar({ isMainSidebarShow, setMainSidebarShow }) {
    return (
        <div css={s.layout(isMainSidebarShow)}> {/** ture false 가 상태여야 한다 */}
            <MainSidebarHeader setMainSidebarShow={setMainSidebarShow}/>
            <MainSidebarBody />
        </div>
    );
}
export default MainSidebar;

