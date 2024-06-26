/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import RouteStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";
import * as s from "./style";

function MainBody() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/routestudy/*" element={<RouteStudyPage />} />
            </Routes>
        </div>
    );
}
export default MainBody;

// <Route path="/routestudy/*" element={<RouteStudyPage />}/> -> 서버라우터
// 라우터 안에 또 다른 라우터를 넣은것