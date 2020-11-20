// ? 判断考勤表显示的颜色
export default (row, index) => {
  return (
    row[`day${index + 1}`].name === '休' ? '#666'
      : row[`day${index + 1}`].name === '正常' ? 'cyan'
        : row[`day${index + 1}`].name === '加班' ? 'cyan'
          : row[`day${index + 1}`].name === '正常' ? '#666'
            : row[`day${index + 1}`].name === '加班' ? '#666'
              : row[`day${index + 1}`].name === '周一' ? 'red'
                : row[`day${index + 1}`].name === '周二' ? 'red'
                  : row[`day${index + 1}`].name === '周三' ? 'red'
                    : row[`day${index + 1}`].name === '周四' ? 'red'
                      : row[`day${index + 1}`].name === '周五' ? 'red'
                        : row[`day${index + 1}`].name === '周六' ? 'red'
                          : row[`day${index + 1}`].name === '周日' ? 'red'
                            : 'orange')
}
