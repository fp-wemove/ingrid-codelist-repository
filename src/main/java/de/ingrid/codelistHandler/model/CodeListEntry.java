package de.ingrid.codelistHandler.model;

import java.util.HashMap;
import java.util.Map;

/**
 * The model for an entry of a CodeList.
 * 
 * @author Andre
 *
 */
public class CodeListEntry {
    private String              id;
    private Map<String, String> localisations;
    private String              defaultLocale;
    
    public CodeListEntry() {
        localisations = new HashMap<String, String>();
        defaultLocale = "";
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getId() {
        return id;
    }
    
    public void setLocalisedEntry(String lang, String localisedEntry) {
        this.localisations.put(lang, localisedEntry);
    }
    
    public String getLocalisedEntry(String lang) {
        return this.localisations.get(lang);
    }

    
    public void setDefaultLocale(String defaultLocale) {
        this.defaultLocale = defaultLocale;
    }

    public String getDefaultLocale() {
        return defaultLocale;
    }
    
}
