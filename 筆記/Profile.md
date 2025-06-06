# 1️⃣ 背景圖的實作方式

## ✅ 常見實作方式

```html
<!-- 方法一：使用 <img> 標籤 -->
<img src="..." class="profile-cover" />

<!-- 方法二：使用 CSS background-image -->
<div class="profile-bg"></div>
```

```scss
.profile-bg {
  background-image: url(...);
  background-size: cover;
  background-position: center;
}
```

## ✅ 若要實現「模糊背景 + 清晰主圖」的設計，建議做法是：

| 圖層角色 | 描述           | 實作建議                                      |
| ---- | ------------ | ----------------------------------------- |
| 背景層  | 模糊效果，不影響前景內容 | 使用 `div` 或 `::before` 搭配 `filter: blur()` |
| 主視覺  | 清晰圖像，作為內容主體  | 使用 `<img>` 顯示清晰圖片                         |

---

# 2️⃣ `filter: blur()` 使用注意事項

## ✅ 語法：

```scss
.element {
  filter: blur(20px);
}
```

## ❗ 重要特性與常見誤區：

| 問題/特性                       | 說明                        |
| --------------------------- | ------------------------- |
| 作用對象為整個元素渲染結果               | 包含文字、圖片、邊框等               |
| 無法只針對背景模糊，內容保留清晰            | 需要**分層處理**（例如 `::before`） |
| 模糊效果會「擴散」到元素外部              | 預設情況下不裁切邊緣模糊區             |
| 需搭配 `overflow: hidden` 限制溢出 | 否則會破壞圓角與版面整潔              |

## ✅ 正確結構範例

```html
<div class="profile">
  <div class="profile-bg"></div> <!-- 背景模糊層 -->
  <img src="..." class="profile-cover" /> <!-- 清晰主圖 -->
</div>
```

```scss
.profile {
  position: relative;
  overflow: hidden; // ✅ 裁切模糊邊緣
}

.profile-bg {
  position: absolute;
  inset: 0;
  background-image: url(...);
  background-size: cover;
  background-position: center;
  filter: blur(30px); // ✅ 背景模糊
  opacity: 0.7;
  z-index: -1;
}

.profile-cover {
  position: absolute;
  inset: 0;
  object-fit: cover;
  z-index: 0;
}
```

---

# 🧠 小結

* 想要「背景模糊但主圖清晰」→ 必須分層實作。
* `filter: blur()` 會擴散到容器外，需加 `overflow: hidden` 控制。
* 使用 `::before` 或獨立 `.div` 可達到更精細控制效果。

---