// 範例：簡單的打掃組別與成員資料
const cleaningData = [
    { area: "黑板與講台", members: ["王小明", "李小華"] },
    { name: "教室地板", members: ["張大為", "陳美麗"] },
    { name: "走廊與陽台", members: ["林志豪", "黃雅婷"] },
    { name: "資源回收區", members: ["周杰倫", "蔡依林"] }
];

function renderBoard() {
    const board = document.getElementById('schedule-board');
    let html = '';
    cleaningData.forEach(item => {
        html += `<div style="border-bottom: 1px solid #eee; padding: 10px 0;">
            <h3>📍 ${item.area}</h3>
            <p>值日生：${item.members.join(', ')}</p>
        </div>`;
    });
    board.innerHTML = html;
}

window.onload = renderBoard;