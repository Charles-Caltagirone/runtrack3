<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        clifford: '#da373d',
                    }
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer utilities {
      .content-auto {
        content-visibility: auto;
      }
    }
  </style>
</head>

<body class="text-center text-orange-600 bg-sky-200">

    <header>
        <nav class="text-orange-600 bg-black p-3">
            <a href="index.php">Accueil</a>
            <a href="index.php">Inscription</a>
            <a href="index.php">Connexion</a>
            <a href="index.php">Recherche</a>
        </nav>
    </header>


    <main>
        <section>
            <form action="#" method="post">
                <fieldset>
                    <legend>Civilité :</legend>
                    <input type="radio" name="civilite" id="civilite-mr" value="mr" required>
                    <label for="civilite-mr">M.</label>
                    <input type="radio" name="civilite" id="civilite-mme" value="mme" required>
                    <label for="civilite-mme">Mme</label>
                    <input type="radio" name="civilite" id="civilite-mlle" value="mlle" required>
                    <label for="civilite-mlle">Mlle</label>
                </fieldset>

                <fieldset>
                    <p class="mb-2">Informations personnelles :</p>
                    <i class="fa-solid fa-signature"></i>
                    <input type="text" name="prenom" id="prenom" placeholder="Prénom" required class="ml-2 px-3 py-1 border rounded border-black bg-pink-100 mb-1">
                    <br>
                    <i class="fa-solid fa-signature"></i>
                    <input type="text" name="nom" id="nom" placeholder="Nom" required class="ml-2 px-3 py-1 border rounded border-black bg-pink-100 mb-1">
                    <br>
                    <i class="fa-regular fa-envelope"></i>
                    <input type="text" name="adresse" id="adresse" placeholder="Adress" required class="ml-2 px-3 py-1 border rounded border-black bg-pink-100 mb-1">
                </fieldset>

                <fieldset>
                    <p class="mb-2">Informations de connexion :</p>
                    <i class="fa-solid fa-at"></i>
                    <input type="email" name="email" id="email" placeholder="Email" required class="ml-2 px-3 py-1 border rounded border-black bg-pink-100 mb-1">
                    <br>
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" name="password" id="password" placeholder="Password" required class="ml-2 px-3 py-1 border rounded border-black bg-pink-100 mb-1">
                    <br>
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" name="password-confirmation" id="password-confirmation" placeholder="Confirme Password" required class="ml-2 px-3 py-1 border rounded border-black bg-pink-100 mb-1">
                </fieldset>

                <fieldset>
                    <legend>Passions :</legend>
                    <input type="checkbox" name="passions[]" id="passion-informatique" value="informatique">
                    <label for="passion-informatique">Informatique</label>
                    <i class="fa-solid fa-computer"></i>
                    <input type="checkbox" name="passions[]" id="passion-voyages" value="voyages">
                    <label for="passion-voyages">Voyages</label>
                    <i class="fa-solid fa-plane"></i>
                    <input type="checkbox" name="passions[]" id="passion-sport" value="sport">
                    <label for="passion-sport">Sport</label>
                    <i class="fa-solid fa-volleyball"></i>
                    <input type="checkbox" name="passions[]" id="passion-lecture" value="lecture">
                    <label for="passion-lecture">Lecture</label>
                    <i class="fa-solid fa-book"></i>
                </fieldset>
                <button type="submit" class="mt-4 ml-2 px-3 py-1 border rounded border-black">Valider</button>
            </form>
        </section>
    </main>


    <footer class="text-red-600">
        <div class="mr-2">
            <a href="index.php">Accueil</a>
            <a href="index.php">Inscription</a>        
            <a href="index.php">Connexion</a>
            <a href="index.php">Recherche</a>
        </div>
    </footer>

</body>

</html>