export default (row, index) => {
  return (
    row[`day${index + 1}`].desc === '休' ? '#666'
      : row[`day${index + 1}`].desc === '正常' ? '#666'
        : row[`day${index + 1}`].desc === '周一' ? 'red'
          : row[`day${index + 1}`].desc === '周二' ? 'red'
            : row[`day${index + 1}`].desc === '周三' ? 'red'
              : row[`day${index + 1}`].desc === '周四' ? 'red'
                : row[`day${index + 1}`].desc === '周五' ? 'red'
                  : row[`day${index + 1}`].desc === '周六' ? 'red'
                    : row[`day${index + 1}`].desc === '周日' ? 'red'
                      : 'orange')
}
