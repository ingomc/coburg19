<script>
  import { fix_and_outro_and_destroy_block } from 'svelte/internal';
  import Card from './Card.svelte';
  import Header from './Header.svelte';
  import Social from './Social.svelte';

  export let data;
  let sortedData = [];
  data.forEach((element) => {
    // SORT COBURG TO THE TOP
    const city = element.attributes.GEN.toLowerCase();
    const coburg = 'coburg';
    if (city.includes(coburg)) {
      sortedData.unshift(element);
    } else {
      sortedData.push(element);
    }
  });
</script>

<style>
  .card-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
  .content {
    padding: 1rem;
  }
</style>

<main>
  <Header />
  <div class="card-wrapper container">
    {#each sortedData as itemData}
      <Card data={itemData.attributes} />
    {/each}
  </div>

  <div class="container">
    <!-- Social sharing -->
    <p>
      <center>
        <Social />
      </center>
    </p>

    <div class="content">
      <p>
        Einen Tag nach dem Treffen der&nbsp;<strong>Ministerpräsidenten und Kanzlerin Merkel</strong>&nbsp;hat
        das bayerische Kabinett unter Leitung von Ministerpräsident Markus Söder die für Bayern
        geltenden Bestimmungen beschlossen.&nbsp;
      </p>
      <div id="intxt-1" class="aditem " />
      <p>
        Um die weitere Ausbreitung des Corona-Virus eindämmen und einen zweiten Lockdown zu
        verhindern, wird
        <strong>in Bayern die Corona-Ampel eingeführt.&nbsp;</strong>
      </p>
      <p>
        <strong>Alle Regeln gelten für die Regionen als MUSS-Regeln. </strong>Nicht wie
        bisher&nbsp;als "Kann-Regeln"
      </p>
      <p>
        <strong><span class="darkbluetext"><span class="greentext">Grün - Inzidenz&nbsp;bis 35</span></span></strong>
      </p>
      <ul>
        <li>Allgemeine AHA + L-Regeln&nbsp;&nbsp;(Abstand, Hygiene, Alltagsmaske und Lüften)</li>
        <li>
          Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit
          treffen ist erlaubt
        </li>
        <li>
          Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum
          Platz&nbsp;
        </li>
        <li>
          Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind
          erlaubt
        </li>
      </ul>
      <p>
        <span class="yellowtext"><strong><span class="yellowtext"><span class="darkbluetext"><span
                  class="yellowtext">Gelb -</span>&nbsp;</span></span></strong><span
            class="darkbluetext"><strong><span
                class="yellowtext">Inzidenz</span></strong></span></span><b
          style="background-color: initial;"><span class="darkbluetext"><span
              class="yellowtext"><span class="darkbluetext">&nbsp;</span>35 bis 50</span></span></b>
      </p>
      <ul>
        <li>
          Maskenpflicht wird ausgeweitet.&nbsp;
          <ul>
            <li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li>
            <li>Maskenpflicht an Hochschulen&nbsp;</li>
            <li>in öffentlichen Gebäuden</li>
            <li>
              am Arbeitsplatz, wenn der Abstand von 1,5m&nbsp;nicht eingehalten werden kann. Im
              Betrieb, sobald man den Platz verlässt.
            </li>
            <li>Öffentlichen Plätzen, die stark frequentiert sind.</li>
          </ul>
        </li>
        <li>Allgemeine Sperrstunde ab 23 Uhr&nbsp;</li>
        <li>Generelles Alkoholverkaufsverbot&nbsp;an Tankstellen ab 23 Uhr&nbsp;</li>
        <li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li>
        <li>
          private Feiern und Treffen&nbsp;sind auf zwei Haushalte oder maximal 10 Personen
          beschränkt. Egal ob draußen, daheim oder im Lokal.
        </li>
      </ul>
      <p>
        <span class="redtext"><strong>Rot - Inzidenz&nbsp;</strong></span><span
          class="redtext"><strong>ab 50</strong></span>
      </p>
      <ul>
        <li>
          Maskenpflicht wie bei 35-50 und zusätzlich&nbsp;Maskenpflicht auch in der
          Grundschule&nbsp;&nbsp;
        </li>
        <li>Allgemeine Sperrstunde ab 22 Uhr</li>
        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr&nbsp;</li>
        <li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li>
        <li>
          private Feiern und Treffen&nbsp;sind auf 5 Personen oder zwei Haushalte&nbsp;beschränkt.
          Egal ob draußen, daheim oder im Lokal.
        </li>
      </ul>
      <center>
        Crafted with ❤️ from
        <a
          href="https://www.andre-bellmann.de/?utm_source=social-media&utm_medium=corona&utm_campaign=website">Andre
          Bellmann</a>
      </center>
    </div>
  </div>
  <div class="container" />
</main>
