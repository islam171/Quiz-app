export const content = `
     <section class="section">
        <div class="grid cols-1 form-login">
            <div class="card pad">
                <h2 style="margin:0 0 6px;">Вход</h2>
                <p style="margin:0 0 16px;color:rgba(255,255,255,.72);">
                    Введи данные.
                </p>

                <form class="form">
                    <div class="field">
                        <label for="username">Username</label>
                        <input class="input" id="username" type="text" placeholder="Username" />
                    </div>

                    <div class="field">
                        <label for="pass">Пароль</label>
                        <input class="input" id="pass" type="password" placeholder="••••••••" />
                    </div>


                    <button class="btn primary" id="login" type="button">Войти</button>

                    <p class="helper" style="margin:0;">
                        Вход в приложения
                    </p>
                </form>
            </div>
        </div>
    </section>`