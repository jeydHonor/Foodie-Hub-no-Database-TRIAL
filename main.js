
        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('foodModal');
            const modalVideo = document.getElementById('modalVideo');
            const modalRecipe = document.getElementById('modalRecipe');
            const modalClose = document.getElementById('modalClose');

            const foodData = {
                adobo: {
                    videoSrc: 'Assets/Adobo.mp4',
                    recipeHTML: `
                        <h4>Recipe</h4>
                        <ul>
                            <li>1 kg chicken or pork (or mix)</li>
                            <li>½ cup soy sauce</li>
                            <li>½ cup vinegar</li>
                            <li>1 head garlic (crushed)</li>
                            <li>2 bay leaves</li>
                            <li>1 tsp peppercorns</li>
                            <li>1 cup water</li>
                            <li>1 tbsp sugar (optional)</li>
                        </ul>
                        <p>(1) Combine meat, soy sauce, garlic, and peppercorns. Marinate 30 mins.<br>
                        (2) Add vinegar, bay leaves, and water. Bring to a boil, then simmer for 40 mins.<br>
                        (3) Optional: Fry meat until slightly crispy, then return to sauce.<br>
                        (4) Simmer until sauce thickens. Serve with rice.</p>
                    `
                },
                sinigang: {
                    videoSrc: 'Assets/Sinigang.mp4',
                    recipeHTML: `
                        <h4>Recipe</h4>
                        <ul>
                            <li>500g pork belly or ribs</li>
                            <li>1 pack sinigang mix (or fresh tamarind)</li>
                            <li>1 onion, quartered</li>
                            <li>2 tomatoes, quartered</li>
                            <li>1 radish, sliced</li>
                            <li>1 cup sitaw (long beans)</li>
                            <li>1 cup kangkong (water spinach)</li>
                            <li>1 eggplant, sliced</li>
                            <li>6 cups water</li>
                        </ul>
                        <p>(1) Boil pork with onions and tomatoes until tender.<br>
                        (2) Add sinigang mix (or tamarind juice).<br>
                        (3) Add radish, eggplant, and sitaw. Simmer 5–7 mins.<br>
                        (4) Add kangkong last. Season with fish sauce. Serve hot.</p>
                    `
                },
                tortang: {
                    videoSrc: 'Assets/Torta.mp4',
                    recipeHTML: `
                        <h4>Recipe</h4>
                        <ul>
                            <li>2 large eggplants</li>
                            <li>3 eggs</li>
                            <li>Salt and pepper</li>
                            <li>Oil for frying</li>
                        </ul>
                        <p>(1) Grill or boil eggplants until soft. Peel skin.<br>
                        (2) Flatten eggplant with fork.<br>
                        (3) Beat eggs, season, and dip eggplant in egg mixture.<br>
                        (4) Fry until golden brown on both sides.</p>
                    `
                },
                spaghetti: {
                    videoSrc: 'Assets/Spaghetti.mp4',
                    recipeHTML: `
                        <h4>Recipe</h4>
                        <ul>
                            <li>500g spaghetti noodles</li>
                            <li>500g ground pork or beef</li>
                            <li>2 cups banana ketchup</li>
                            <li>1 cup hotdogs, sliced</li>
                            <li>1 onion, chopped</li>
                            <li>4 cloves garlic, minced</li>
                            <li>1 cup grated cheese</li>
                            <li>1 tbsp oil</li>
                        </ul>
                        <p>(1) Boil noodles, set aside.<br>
                        (2) Sauté garlic, onion, and ground meat.<br>
                        (3) Add hotdogs, ketchup, and a bit of water. Simmer 10 mins.<br>
                        (4) Mix in cooked pasta. Top with cheese. Serve hot</p>
                    `
                },
                bicol: {
                    videoSrc: 'Assets/Bicol.mp4',
                    recipeHTML: `
                        <h4>Recipe</h4>
                        <ul>
                            <li>500g pork belly, sliced</li>
                            <li>2 cups coconut milk</li>
                            <li>5–10 green chilies (or adjust to spice level)</li>
                            <li>3 cloves garlic, minced</li>
                            <li>1 onion, sliced</li>
                            <li>2tbsp bagoong (shrimp paste)</li>
                        </ul>
                        <p>(1) Sauté garlic and onion. Add pork. Cook until browned.<br>
                        (2) Add shrimp paste, chilies, and coconut milk.<br>
                        (3) Simmer until sauce thickens and pork is tender.</p>
                    `
                },
                puto: {
                    videoSrc: 'Assets/Puto.mp4',
                    recipeHTML: `
                        <h4>Recipe</h4>
                        <ul>
                            <li>2 cups rice flour</li>
                            <li>1 cup sugar</li>
                            <li>1 tbsp baking powder</li>
                            <li>1 ½ cups water or coconut milk</li>
                            <li>Cheese slices (optional)</li>
                        </ul>
                        <p>(1) Mix all dry ingredients. Add water/coconut milk. Mix well.<br>
                        (2) Pour into greased molds.<br>
                        (3) Top with cheese if desired.<br>
                        (4) Steam for 10–15 minutes. Cool before serving.</p>
                    `
                }
            };

            document.querySelectorAll('.food-card').forEach(card => {
                card.addEventListener('click', () => {
                    const foodKey = card.getAttribute('data-food');
                    if (foodData[foodKey]) {
                        modalVideo.querySelector('source').src = foodData[foodKey].videoSrc;
                        modalVideo.load();
                        modalRecipe.innerHTML = foodData[foodKey].recipeHTML;
                        modal.classList.add('show');
                    }
                });
            });

            modalClose.addEventListener('click', () => {
                modal.classList.remove('show');
                modalVideo.pause();
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                    modalVideo.pause();
                }
            });

            // Navigation functionality
            const navLinks = document.querySelectorAll('.nav-link');
            const contentSections = document.querySelectorAll('.content-section');

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetSectionId = link.getAttribute('data-section');

                    contentSections.forEach(section => {
                        section.classList.remove('active');
                    });

                    document.getElementById(targetSectionId).classList.add('active');

                    // Scroll to the top of the section
                    document.getElementById(targetSectionId).scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });

            // Login/Register form toggle
            const showLoginBtn = document.getElementById('showLoginBtn');
            const showRegisterBtn = document.getElementById('showRegisterBtn');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');

            showLoginBtn.addEventListener('click', () => {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
                showLoginBtn.classList.add('active');
                showRegisterBtn.classList.remove('active');
            });

            showRegisterBtn.addEventListener('click', () => {
                registerForm.classList.add('active');
                loginForm.classList.remove('active');
                showRegisterBtn.classList.add('active');
                showLoginBtn.classList.remove('active');
            });

            // Initially show login form when login-register section is active
            // This handles the case where a user navigates directly to #login-register
            if (document.getElementById('login-register').classList.contains('active')) {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
                showLoginBtn.classList.add('active');
                showRegisterBtn.classList.remove('active');
            }
                    });