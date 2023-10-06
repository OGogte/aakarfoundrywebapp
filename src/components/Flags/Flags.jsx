/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Flags = ({
  property1,
  className,
  propertyUs = "https://c.animaapp.com/jwlVi52W/img/property-1-us.svg",
}) => {
  return (
    <img
      className={`flags ${property1} ${className}`}
      alt="Property AD"
      src={
        property1 === "AE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ae.svg"
          : property1 === "AF"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-af.svg"
          : property1 === "AG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ag.svg"
          : property1 === "AL"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-al.svg"
          : property1 === "AM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-am.svg"
          : property1 === "AN"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-an.svg"
          : property1 === "AO"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ao.svg"
          : property1 === "AR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ar.svg"
          : property1 === "AT"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-at.svg"
          : property1 === "AU"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-au.svg"
          : property1 === "AW"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-aw.svg"
          : property1 === "AZ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-az.svg"
          : property1 === "BA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ba.svg"
          : property1 === "BB"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bb.svg"
          : property1 === "BD"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bd.svg"
          : property1 === "BE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-be.svg"
          : property1 === "BF"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bf.svg"
          : property1 === "BG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bg.svg"
          : property1 === "BH"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bh.svg"
          : property1 === "BI"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bi.svg"
          : property1 === "BJ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bj.svg"
          : property1 === "BN"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bn.svg"
          : property1 === "BO"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bo.svg"
          : property1 === "BR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-br.svg"
          : property1 === "BS"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bs.svg"
          : property1 === "BT"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bt.svg"
          : property1 === "BV"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bv.svg"
          : property1 === "BW"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bw.svg"
          : property1 === "BY"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-by.svg"
          : property1 === "BZ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-bz.svg"
          : property1 === "CA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ca.svg"
          : property1 === "CD"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cd.svg"
          : property1 === "CF"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cf.svg"
          : property1 === "CG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cg.svg"
          : property1 === "CH"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ch.svg"
          : property1 === "CI"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ci.svg"
          : property1 === "CL"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cl.svg"
          : property1 === "CM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cm.svg"
          : property1 === "CN"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cn.svg"
          : property1 === "CO"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-co.svg"
          : property1 === "CR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cr.svg"
          : property1 === "CU"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cu.svg"
          : property1 === "CV"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cv.svg"
          : property1 === "CW"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cw.svg"
          : property1 === "CY"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cy.svg"
          : property1 === "CZ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-cz.svg"
          : property1 === "DE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-de.svg"
          : property1 === "DJ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-dj.svg"
          : property1 === "DK"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-dk.svg"
          : property1 === "DM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-dm.svg"
          : property1 === "DO"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-do.svg"
          : property1 === "DZ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-dz.svg"
          : property1 === "EC"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ec.svg"
          : property1 === "EE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ee.svg"
          : property1 === "EG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-eg.svg"
          : property1 === "ER"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-er.svg"
          : property1 === "ES"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-es.svg"
          : property1 === "ET"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-et.svg"
          : property1 === "FI"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-fi.svg"
          : property1 === "FJ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-fj.svg"
          : property1 === "FM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-fm.svg"
          : property1 === "FR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-fr.svg"
          : property1 === "GA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ga.svg"
          : property1 === "GB"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-gb.svg"
          : property1 === "GD"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-gd.svg"
          : property1 === "GE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ge.svg"
          : property1 === "GH"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-gh.svg"
          : property1 === "GM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-gm.svg"
          : property1 === "GN"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-gn.svg"
          : property1 === "GQ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-gq.svg"
          : property1 === "GR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-gr.svg"
          : property1 === "GT"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-gt.svg"
          : property1 === "GW"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-gw.svg"
          : property1 === "GY"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-gy.svg"
          : property1 === "HK"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-hk.svg"
          : property1 === "HN"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-hn.svg"
          : property1 === "HR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-hr.svg"
          : property1 === "HT"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ht.svg"
          : property1 === "HU"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-hu.svg"
          : property1 === "ID"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-id.svg"
          : property1 === "IE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ie.svg"
          : property1 === "IL"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-il.svg"
          : property1 === "IN"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-in.svg"
          : property1 === "IQ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-iq.svg"
          : property1 === "IR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ir.svg"
          : property1 === "IS"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-is.svg"
          : property1 === "IT"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-it.svg"
          : property1 === "JM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-jm.svg"
          : property1 === "JO"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-jo.svg"
          : property1 === "JP"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-jp.svg"
          : property1 === "KE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ke.svg"
          : property1 === "KG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-kg.svg"
          : property1 === "KH"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-kh.svg"
          : property1 === "KI"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ki.svg"
          : property1 === "KM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-km.svg"
          : property1 === "KP"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-kp.svg"
          : property1 === "KR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-kr.svg"
          : property1 === "KW"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-kw.svg"
          : property1 === "KZ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-kz.svg"
          : property1 === "LA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-la.svg"
          : property1 === "LB"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-lb.svg"
          : property1 === "LC"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-lc.svg"
          : property1 === "LI"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-li.svg"
          : property1 === "LK"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-lk.svg"
          : property1 === "LR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-lr.svg"
          : property1 === "LS"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ls.svg"
          : property1 === "LT"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-lt.svg"
          : property1 === "LU"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-lu.svg"
          : property1 === "LV"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-lv.svg"
          : property1 === "LY"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ly.svg"
          : property1 === "MA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ma.svg"
          : property1 === "MC"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mc.svg"
          : property1 === "MD"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-md.svg"
          : property1 === "ME"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-me.svg"
          : property1 === "MG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mg.svg"
          : property1 === "MH"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mh.svg"
          : property1 === "MK"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mk.svg"
          : property1 === "ML"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ml.svg"
          : property1 === "MM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mm.svg"
          : property1 === "MN"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mn.svg"
          : property1 === "MR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mr.svg"
          : property1 === "MT"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mt.svg"
          : property1 === "MU"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mu.svg"
          : property1 === "MV"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mv.svg"
          : property1 === "MW"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mw.svg"
          : property1 === "MX"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mx.svg"
          : property1 === "MY"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-my.svg"
          : property1 === "MZ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-mz.svg"
          : property1 === "NA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-na.svg"
          : property1 === "NE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ne.svg"
          : property1 === "NG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ng.svg"
          : property1 === "NI"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ni.svg"
          : property1 === "NL"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-nl.svg"
          : property1 === "NO"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-no.svg"
          : property1 === "NP"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-np.svg"
          : property1 === "NR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-nr.svg"
          : property1 === "NZ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-nz.svg"
          : property1 === "OM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-om.svg"
          : property1 === "PA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-pa.svg"
          : property1 === "PE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-pe.svg"
          : property1 === "PG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-pg.svg"
          : property1 === "PH"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ph.svg"
          : property1 === "PK"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-pk.svg"
          : property1 === "PL"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-pl.svg"
          : property1 === "PS"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ps.svg"
          : property1 === "PT"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-pt.svg"
          : property1 === "PW"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-pw.svg"
          : property1 === "PY"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-py.svg"
          : property1 === "QA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-qa.svg"
          : property1 === "RO"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ro.svg"
          : property1 === "RS"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-rs.svg"
          : property1 === "RU"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ru.svg"
          : property1 === "RW"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-rw.svg"
          : property1 === "SA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sa.svg"
          : property1 === "SB"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sb.svg"
          : property1 === "SC"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sc.svg"
          : property1 === "SD"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sd.svg"
          : property1 === "SE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-se.svg"
          : property1 === "SG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sg.svg"
          : property1 === "SI"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-si.svg"
          : property1 === "SK"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sk.svg"
          : property1 === "SL"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sl.svg"
          : property1 === "SM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sm.svg"
          : property1 === "SN"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sn.svg"
          : property1 === "SO"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-so.svg"
          : property1 === "SR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sr.svg"
          : property1 === "SS"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ss.svg"
          : property1 === "ST"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-st.svg"
          : property1 === "SV"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sv.svg"
          : property1 === "SX"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sx.svg"
          : property1 === "SY"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sy.svg"
          : property1 === "SZ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-sz.svg"
          : property1 === "TD"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-td.svg"
          : property1 === "TG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-tg.svg"
          : property1 === "TH"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-th.svg"
          : property1 === "TJ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-tj.svg"
          : property1 === "TL"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-tl.svg"
          : property1 === "TM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-tm.svg"
          : property1 === "TN"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-tn.svg"
          : property1 === "TO"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-to.svg"
          : property1 === "TR"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-tr.svg"
          : property1 === "TT"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-tt.svg"
          : property1 === "TV"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-tv.svg"
          : property1 === "TZ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-tz.svg"
          : property1 === "UA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ua.svg"
          : property1 === "UG"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ug.svg"
          : property1 === "US"
          ? propertyUs
          : property1 === "UY"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-uy.svg"
          : property1 === "UZ"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-uz.svg"
          : property1 === "VC"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-vc.svg"
          : property1 === "VE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ve.svg"
          : property1 === "VI"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-vi.svg"
          : property1 === "VN"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-vn.svg"
          : property1 === "VU"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-vu.svg"
          : property1 === "WS"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ws.svg"
          : property1 === "YE"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-ye.svg"
          : property1 === "ZA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-za.svg"
          : property1 === "ZM"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-zm.svg"
          : property1 === "ZW"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-zw.svg"
          : property1 === "VA"
          ? "https://c.animaapp.com/jwlVi52W/img/property-1-va.svg"
          : "https://c.animaapp.com/jwlVi52W/img/property-1-ad.svg"
      }
    />
  );
};

Flags.propTypes = {
  property1: PropTypes.oneOf([
    "MH",
    "HU",
    "SK",
    "TL",
    "CF",
    "TG",
    "SA",
    "KW",
    "AT",
    "LV",
    "MK",
    "MD",
    "US",
    "WS",
    "KZ",
    "AL",
    "MV",
    "ET",
    "UZ",
    "BA",
    "VI",
    "BY",
    "ZM",
    "YE",
    "TM",
    "AZ",
    "BV",
    "KG",
    "LA",
    "MN",
    "GE",
    "NG",
    "KR",
    "SN",
    "RO",
    "MR",
    "RU",
    "CI",
    "SS",
    "FM",
    "MG",
    "BF",
    "MZ",
    "SM",
    "CY",
    "ID",
    "IL",
    "BI",
    "PL",
    "CG",
    "IN",
    "SX",
    "ML",
    "BG",
    "VN",
    "BR",
    "BH",
    "MX",
    "TO",
    "TD",
    "NA",
    "GN",
    "CZ",
    "AG",
    "MM",
    "LU",
    "FR",
    "PA",
    "SZ",
    "CV",
    "DZ",
    "AE",
    "BO",
    "DJ",
    "HK",
    "LS",
    "NZ",
    "JP",
    "NO",
    "CU",
    "IR",
    "BN",
    "LR",
    "SG",
    "RW",
    "SY",
    "GQ",
    "TV",
    "DO",
    "UA",
    "GY",
    "HT",
    "IQ",
    "PH",
    "SC",
    "CW",
    "NP",
    "MW",
    "CL",
    "AD",
    "CN",
    "HR",
    "TN",
    "TR",
    "KH",
    "PG",
    "ZA",
    "BJ",
    "OM",
    "SL",
    "JM",
    "CD",
    "PY",
    "NI",
    "CA",
    "EC",
    "SB",
    "AU",
    "BD",
    "GH",
    "IE",
    "CO",
    "PT",
    "GA",
    "EE",
    "KM",
    "DM",
    "JO",
    "SE",
    "ER",
    "CR",
    "LC",
    "PE",
    "BS",
    "BW",
    "AN",
    "PS",
    "CH",
    "PK",
    "SD",
    "LI",
    "FI",
    "PW",
    "ST",
    "DK",
    "SV",
    "GR",
    "LK",
    "MU",
    "AM",
    "AR",
    "KP",
    "QA",
    "UG",
    "VU",
    "SR",
    "MC",
    "GW",
    "HN",
    "ES",
    "TJ",
    "DE",
    "EG",
    "TZ",
    "GM",
    "LT",
    "VA",
    "TH",
    "VC",
    "NL",
    "CM",
    "GD",
    "GB",
    "NR",
    "AW",
    "BB",
    "LB",
    "ZW",
    "AF",
    "AO",
    "FJ",
    "MT",
    "RS",
    "TT",
    "KE",
    "IT",
    "SO",
    "UY",
    "ME",
    "IS",
    "BE",
    "MY",
    "LY",
    "BT",
    "SI",
    "BZ",
    "VE",
    "GT",
    "MA",
    "NE",
    "KI",
  ]),
  propertyUs: PropTypes.string,
};
