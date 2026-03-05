export const content =`
   <section class="section">
    <div class="topic-layout">

      <!-- LEFT -->
      <div class="card pad flash-wrap">
        <div class="test-top" style="margin-bottom:2px;">
          <div>
            <div class="kicker" id="topicKicker">🃏 Флеш-карточки</div>
            <h2 style="margin:10px 0 0;" id="topicTitle">Тема</h2>

            <div class="meta" style="margin-top:10px;">
              <span class="pill">Карточка: <b id="pos">1</b>/<b id="total">10</b></span>
              <span class="pill">Уровень: <b id="level">—</b></span>
              <span class="pill">Открыто ответов: <b id="opened">0</b></span>
            </div>
          </div>

          <a class="btn danger" href="flashcards.html">Назад</a>
        </div>

        <div class="progress-wrap">
          <div class="row" style="justify-content:space-between;">
            <span class="small">Прогресс</span>
            <span class="small"><span id="pct">0</span>%</span>
          </div>
          <div class="progress-bar" aria-label="progress">
            <div class="progress-fill" id="bar"></div>
          </div>
        </div>

        <!-- Flash Card -->
        <div class="flash-card" id="card">
          <div class="flash-inner">
            <div class="side front">
              <div class="label">
                <b>ВОПРОС</b>
                <span class="badge purple">Click to flip</span>
              </div>
              <div class="text" id="frontText">...</div>
              <div class="hint">Нажми на карточку, чтобы увидеть ответ</div>
            </div>

            <div class="side back">
              <div class="label">
                <b>ОТВЕТ</b>
                <span class="badge green">Back side</span>
              </div>
              <div class="text" id="backText">...</div>
              <div class="hint">Нажми, чтобы вернуться к вопросу</div>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <div class="controls">
          <div class="mini">
            <button class="btn" id="prevBtn" type="button">← Предыдущая</button>
            <button class="btn" id="flipBtn" type="button">Перевернуть</button>
            <button class="btn" id="nextBtn" type="button">Следующая →</button>
          </div>

          <div class="mini">
            <button class="btn" id="shuffleBtn" type="button">Перемешать</button>
            <button class="btn" id="resetBtn" type="button">Сброс</button>
          </div>
        </div>

        <p class="helper" style="margin:0;">
          * Прогресс сохраняется автоматически в localStorage для каждой темы.
        </p>
      </div>

      <!-- RIGHT -->
      <aside class="right-side" style="display:grid; gap:14px;">
        <div class="card pad">
          <h3 style="margin:0 0 10px;">Список карточек</h3>
          <div class="q-list" id="qList"></div>
          <p class="helper" style="margin:10px 0 0;">
            Зеленые — где ты уже открывал ответ.
          </p>
        </div>

        <div class="card pad">
          <h3 style="margin:0 0 8px;">Описание</h3>
          <p style="margin:0;color:rgba(255,255,255,.72);font-size:14px;" id="topicDesc">—</p>
        </div>
      </aside>

    </div>
  </section>
`