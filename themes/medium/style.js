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
    
    // 隐藏卡片日期
    .hidden-date {
        display: none;
    }

    // 隐藏卡片带有 mr-2 fas fa-folder 的图标
    .mr-2.fas.fa-folder {
        display: none;
    }
    
    // 隐藏文章日期和浏览数
    .flex.flex-wrap.text-gray-500.py-1 {
        display: none;
    }

  `}</style>
}

export { Style }
