/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`

    // 底色
    .dark body {
        background-color: black;
    }
    
    // 隐藏特定的 div
    .text-sm.py-1 {
        display: none;
    }
    
    // 隐藏日期和瀏覽
    .flex.flex-wrap.text-gray-500.py-1 {
        display: none;
    }

  `}</style>
}

export { Style }
