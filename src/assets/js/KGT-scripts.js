"use strict";

// رویدادهای منوی سازه پیوند
// ===================================
function ShowContentAbout() {
  const showDetails = document.getElementById("AboutContent");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('ContentCharts').style.display = "none";
    document.getElementById('ContentCertification').style.display = "none";
    document.getElementById('ContentWorkWithUs').style.display = "none";
    document.getElementById('ContentCorp').style.display = "none";
    document.getElementById('ContentCertification').style.display = "none";
    document.getElementById('ContentWorkWithUs').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContentCharts() {
  const showDetails = document.getElementById("ContentCharts");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('AboutContent').style.display = "none";
    document.getElementById('ContentCertification').style.display = "none";
    document.getElementById('ContentWorkWithUs').style.display = "none";
    document.getElementById('ContentCorp').style.display = "none";
    document.getElementById('ContentCertification').style.display = "none";
    document.getElementById('ContentWorkWithUs').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContentCertification() {
  const showDetails = document.getElementById("ContentCertification");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('AboutContent').style.display = "none";
    document.getElementById('ContentCharts').style.display = "none";
    document.getElementById('ContentWorkWithUs').style.display = "none";
    document.getElementById('ContentCorp').style.display = "none";
    document.getElementById('ContentWorkWithUs').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContentCorp() {
  const showDetails = document.getElementById("ContentCorp");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('AboutContent').style.display = "none";
    document.getElementById('ContentCharts').style.display = "none";
    document.getElementById('ContentCertification').style.display = "none";
    document.getElementById('ContentWorkWithUs').style.display = "none";
    document.getElementById('ContentCertification').style.display = "none";
    document.getElementById('ContentWorkWithUs').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContentWorkWithUs() {
  const showDetails = document.getElementById("ContentWorkWithUs");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('AboutContent').style.display = "none";
    document.getElementById('ContentCharts').style.display = "none";
    document.getElementById('ContentCertification').style.display = "none";
    document.getElementById('ContentCorp').style.display = "none";
    document.getElementById('ContentCertification').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}
// ===================================

// رویدادهای منوی فعالیت ها
// ===================================
function ShowContent_Foolad() {
  const showDetails = document.getElementById("Content_Foolad");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_SanayeToolid').style.display = "none";
    document.getElementById('Content_SanayeNaft').style.display = "none";
    document.getElementById('Content_SanayeShimiyaee').style.display = "none";
    document.getElementById('Content_SanayeSakhteman').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContent_SanayeToolid() {
  const showDetails = document.getElementById("Content_SanayeToolid");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_Foolad').style.display = "none";
    document.getElementById('Content_SanayeNaft').style.display = "none";
    document.getElementById('Content_SanayeShimiyaee').style.display = "none";
    document.getElementById('Content_SanayeSakhteman').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContent_SanayeNaft() {
  const showDetails = document.getElementById("Content_SanayeNaft");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_Foolad').style.display = "none";
    document.getElementById('Content_SanayeToolid').style.display = "none";
    document.getElementById('Content_SanayeShimiyaee').style.display = "none";
    document.getElementById('Content_SanayeSakhteman').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContent_SanayeShimiyaee() {
  const showDetails = document.getElementById("Content_SanayeShimiyaee");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_Foolad').style.display = "none";
    document.getElementById('Content_SanayeToolid').style.display = "none";
    document.getElementById('Content_SanayeNaft').style.display = "none";
    document.getElementById('Content_SanayeSakhteman').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContent_SanayeSakhteman() {
  const showDetails = document.getElementById("Content_SanayeSakhteman");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_Foolad').style.display = "none";
    document.getElementById('Content_SanayeToolid').style.display = "none";
    document.getElementById('Content_SanayeNaft').style.display = "none";
    document.getElementById('Content_SanayeShimiyaee').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}
// ===================================

// رویدادهای منوی توانمندی ها
// ===================================
function ShowContent_Advice() {
  const showDetails = document.getElementById("Content_Advice");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_Design').style.display = "none";
    document.getElementById('Content_Construction_And_Supply').style.display = "none";
    document.getElementById('Content_Implementation').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContent_Design() {
  const showDetails = document.getElementById("Content_Design");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_Advice').style.display = "none";
    document.getElementById('Content_Construction_And_Supply').style.display = "none";
    document.getElementById('Content_Implementation').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContent_Construction_And_Supply() {
  const showDetails = document.getElementById("Content_Construction_And_Supply");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_Advice').style.display = "none";
    document.getElementById('Content_Design').style.display = "none";
    document.getElementById('Content_Implementation').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContent_Implementation() {
  const showDetails = document.getElementById("Content_Implementation");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_Advice').style.display = "none";
    document.getElementById('Content_Design').style.display = "none";
    document.getElementById('Content_Construction_And_Supply').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}
// ===================================

// رویدادهای منوی تحقیق و توسعه
// ===================================
function ShowContent_Innovations() {
  const showDetails = document.getElementById("Content_Innovations");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_ResearchServices').style.display = "none";
    document.getElementById('Content_Collaborate_On_Ideas').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContent_ResearchServices() {
  const showDetails = document.getElementById("Content_ResearchServices");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_Innovations').style.display = "none";
    document.getElementById('Content_Collaborate_On_Ideas').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}

function ShowContent_Collaborate_On_Ideas() {
  const showDetails = document.getElementById("Content_Collaborate_On_Ideas");
  if (showDetails.style.display === "none") {
    showDetails.style.display = "block";
    document.getElementById('Content_Innovations').style.display = "none";
    document.getElementById('Content_ResearchServices').style.display = "none";
  } else {
    showDetails.style.display = "none";
  }
}
// ===================================
