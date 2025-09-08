    function hitungParkir() {
      const jenis = document.getElementById("jenis").value;
      const lama = parseInt(document.getElementById("lama").value);
      let tarif = 0;

      if (jenis === "motor") {
        tarif = calculateMotorcycle(lama);
      } else if (jenis === "mobil") {
        tarif = calculateCar(lama);
      } else {
        alert("Silakan pilih jenis kendaraan!");
        return;
      }

      function calculateMotorcycle(lama) {
        let i=lama; let tarif=2000;
        while (i>1) {
            tarif=tarif+1000;
            i--;
        }
        return tarif;
      }

        function calculateCar(lama) {
        let i=lama; let tarif=5000;
        while (i>1) {
            tarif=tarif+2000;
            i--;
        }
        return tarif;
    }
    
      document.getElementById("hasil").innerText = 
        `Biaya parkir ${jenis} selama ${lama} jam adalah Rp ${tarif.toLocaleString("id-ID")}`;
    }