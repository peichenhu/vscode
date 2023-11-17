export default function () {
    // if (!editor) return
    const consoleLog = console.log;
    type Task = { isRun: boolean; dataList: any[] };
    const task: Task = {
        isRun: false, // 任务运行状态
        dataList: [], // 任务收集数据
    };
    console.log = function () {
        var args = [...arguments];
        if (task.isRun) {
            task.dataList.push(args);
        }
        consoleLog.call(console, args);
    };
    return task;
}
